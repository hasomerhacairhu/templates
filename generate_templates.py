import shutil
import os
from jinja2 import Environment, FileSystemLoader

template_dir = os.path.join(os.path.dirname(__file__), 'dynamic_templates')
output_dir = os.path.join(os.path.dirname(__file__), 'output')

def render_template(template_name, context, output_name):
    env = Environment(loader=FileSystemLoader(template_dir))
    template = env.get_template(template_name)
    output = template.render(context)
    output_path = os.path.join(output_dir, output_name)
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(output)

import json
import subprocess
import sys

if __name__ == "__main__":
    # Töröljük az összes fájlt az output mappából
    for filename in os.listdir(output_dir):
        file_path = os.path.join(output_dir, filename)
        if os.path.isfile(file_path):
            os.remove(file_path)

    # Másoljuk át a statikus sablonokat az output mappába
    static_dir = os.path.join(os.path.dirname(__file__), 'static_templates')
    for filename in os.listdir(static_dir):
        src_path = os.path.join(static_dir, filename)
        dst_path = os.path.join(output_dir, filename)
        if os.path.isfile(src_path):
            shutil.copy2(src_path, dst_path)

    config_path = os.path.join(os.path.dirname(__file__), 'templates_to_build.json')
    with open(config_path, encoding='utf-8') as f:
        templates_to_build = json.load(f)

    for item in templates_to_build:
        render_template(item['template'], item['context'], item['output'])
        print(f"Generálva: output/{item['output']}")

    # Optionally run the Node-based Maizzle build (if npm available).
    try:
        # check npm availability
        subprocess.run(["npm", "--version"], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        # run npm build in this repository
        repo_root = os.path.dirname(__file__)
        print("Running 'npm run build' to compile Maizzle templates...")
        subprocess.run(["npm", "run", "build"], cwd=repo_root, check=True)
        print("Maizzle build completed.")
    except (subprocess.CalledProcessError, FileNotFoundError) as e:
        print("npm not available or build failed, skipping Maizzle build.")
