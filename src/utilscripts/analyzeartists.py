import pandas as pd

def operate_func(row):
    output = "{"

    output += f'"name": "{row["name"]}", '
    output += f'"image": {row["image"]}, '
    output += f'"location": "{row["location"]}", '
    output += f'"website": "{row["website"]}", '
    output += f'"description": ""'

    for elem in row:
        pass

    return output + "}"

def generate_imports(imagename):
    return f'import {imagename} from "./../images/artistalley/{imagename}.jpg";'

if __name__ == "__main__":
    df = pd.read_csv("artists.csv").fillna("")
    
    imports = df["image"].map(generate_imports)

    with open("imports.txt","w") as f:
        for row in imports:
            print(row, file=f)

    df = df.apply(operate_func, axis=1)
    with open("artists.txt","w") as f:
        print("[", file=f)
        for row in df.tolist():
            print(f"{row},", file=f)
        print("]", file=f)

