import { describe, test, vi } from "vitest";
import MenuPage from "../../MenuPage";
import { settingsPage } from "../../menupages/Settings";
import { render } from "@testing-library/react";

describe("Settings", () => {
    test("con tz option created", async () => {
        let element:JSX.Element = <>
            <MenuPage show_var={() => {return true}} hide_fxn={vi.fn()} idx={0}>
                <MenuPage.Header >{settingsPage["header"]}</MenuPage.Header>
                <MenuPage.Body fluidImage={settingsPage["fluidImage"]} mainText={settingsPage["body"]}></MenuPage.Body>
            </MenuPage>
        </>;
        render(element);
    });
});