import { describe, expect, test, vi } from "vitest";
import MenuPage from "../../MenuPage";
import { settingsPage } from "../../menupages/Settings";
import { createEvent, fireEvent, getAllByText, getByText, render, waitFor } from "@testing-library/react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NATIVETIMETYPE, USECONTZ, USEDEVICETZ } from "../../Utils";

describe("Settings", () => {
    test("con tz option created", async () => {
        let element:JSX.Element = <>
            <MenuPage show_var={() => {return true}} hide_fxn={vi.fn()} idx={0}>
                <MenuPage.Header >{settingsPage["header"]}</MenuPage.Header>
                <MenuPage.Body fluidImage={settingsPage["fluidImage"]} mainText={settingsPage["body"]}></MenuPage.Body>
            </MenuPage>
        </>;
        render(element);
        await waitFor(async () => {
            expect(screen.getByText("Display Event Times in Device Time")).toBeDefined();
            expect(screen.getAllByText('Submit').length).equals(2);
        });
    });

    test("con tz selects use device timezone when checked", async () => {
        const setItemTest = vi.spyOn(Storage.prototype, "setItem").mockReturnValue();
        let element:JSX.Element = <>
            <MenuPage show_var={() => {return true}} hide_fxn={vi.fn()} idx={0}>
                <MenuPage.Header >{settingsPage["header"]}</MenuPage.Header>
                <MenuPage.Body fluidImage={settingsPage["fluidImage"]} mainText={settingsPage["body"]}></MenuPage.Body>
            </MenuPage>
        </>;
        render(element);
        await userEvent.click(screen.getByText("Display Event Times in Device Time"));

        const event = {preventDefault: vi.fn()};        

        await userEvent.click(screen.getAllByText('Submit')[1]);
        
        await waitFor(async () => {
            expect(setItemTest).toHaveBeenCalledWith(NATIVETIMETYPE, USEDEVICETZ);
        });
    });

    test("con tz selects use con timezone when not checked", async () => {
        const setItemTest = vi.spyOn(Storage.prototype, "setItem").mockReturnValue();
        let element:JSX.Element = <>
            <MenuPage show_var={() => {return true}} hide_fxn={vi.fn()} idx={0}>
                <MenuPage.Header >{settingsPage["header"]}</MenuPage.Header>
                <MenuPage.Body fluidImage={settingsPage["fluidImage"]} mainText={settingsPage["body"]}></MenuPage.Body>
            </MenuPage>
        </>;
        render(element);

        const event = {preventDefault: vi.fn()};        

        await userEvent.click(screen.getAllByText('Submit')[1]);
        
        await waitFor(async () => {
            expect(setItemTest).toHaveBeenCalledWith(NATIVETIMETYPE, USECONTZ);
        });

    });
});