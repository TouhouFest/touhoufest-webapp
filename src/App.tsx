import { Route, Routes } from "react-router";
import MainWrapper from "./MainWrapper";
import DatasetWrapper from "./DatasetWrapper";
import NewMenuPage from "./NewMenuPage";

function App({ menupagedata, menuheader }: {menupagedata:Record<string, JSX.Element | string>[], menuheader:JSX.Element|JSX.Element[]}) { 

    return (<Routes>
        <Route element={<MainWrapper menupagedata={menupagedata} menuheader={menuheader}/>}>
            <Route path="/" element={<DatasetWrapper />}/>
            {menupagedata.map((menupage) => {
                let codename:string = menupage["codename"];
                return <Route path={"/" + codename} element={<NewMenuPage content={menupage}/>}/>
            })}
        </Route>
    </Routes>);
}

export default App;