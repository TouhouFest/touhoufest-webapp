import { describe, expect, test, vi } from "vitest";
import MenuPage from "../../MenuPage";
import { settingsPage } from "../../menupages/Settings";
import { createEvent, fireEvent, getAllByText, getByText, render, waitFor } from "@testing-library/react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NATIVETIMETYPE, USECONTZ, USEDEVICETZ } from "../../Utils";
import { Toast } from "@capacitor/toast";

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
        const setItemTest = localStorage.setItem.mockReturnValue();
        Toast.show = vi.fn().mockReturnValue(undefined);
        let element:JSX.Element = <>
            <MenuPage show_var={() => {return true}} hide_fxn={vi.fn()} idx={0}>
                <MenuPage.Header >{settingsPage["header"]}</MenuPage.Header>
                <MenuPage.Body fluidImage={settingsPage["fluidImage"]} mainText={settingsPage["body"]}></MenuPage.Body>
            </MenuPage>
        </>;
        render(element);

        await userEvent.click(screen.getByRole('checkbox'));
        // await userEvent.click(screen.getByText("Display Event Times in Device Time"));

        const event = {preventDefault: vi.fn()};        

        await userEvent.click(screen.getAllByText('Submit')[1]);
        
        await waitFor(async () => {
            expect(setItemTest).toHaveBeenCalledWith(NATIVETIMETYPE, USEDEVICETZ);
            expect(Toast.show).toHaveBeenCalledWith({text:"Event times will display in device timezone", position:"center"});
        });
    });

    test("con tz selects use con timezone when not checked", async () => {
        Toast.show = vi.fn().mockReturnValue(undefined);
        const setItemTest = localStorage.setItem.mockReturnValue();
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
            expect(Toast.show).toHaveBeenCalledWith({text:"Event times will display in con timezone", position:"center"});
        });

    });

    test("con tz searches for nativetimetype settings on start", async () => {
        
        const getItemTest = localStorage.getItem.mockReturnValue(null);

        let element:JSX.Element = <>
            <MenuPage show_var={() => {return true}} hide_fxn={vi.fn()} idx={0}>
                <MenuPage.Header >{settingsPage["header"]}</MenuPage.Header>
                <MenuPage.Body fluidImage={settingsPage["fluidImage"]} mainText={settingsPage["body"]}></MenuPage.Body>
            </MenuPage>
        </>;
        render(element);

        await waitFor(async () => {
            expect(getItemTest).toHaveBeenCalledWith(NATIVETIMETYPE);
        });
    });

    test("con tz checks nativetimetype automatically if already filled", async () => {
        const getItemTest = localStorage.getItem.mockImplementation((key) => {
            if(key === NATIVETIMETYPE) {return USEDEVICETZ;}
            else{return null;}
        });

        let element:JSX.Element = <>
            <MenuPage show_var={() => {return true}} hide_fxn={vi.fn()} idx={0}>
                <MenuPage.Header >{settingsPage["header"]}</MenuPage.Header>
                <MenuPage.Body fluidImage={settingsPage["fluidImage"]} mainText={settingsPage["body"]}></MenuPage.Body>
            </MenuPage>
        </>;
        render(element);

        await waitFor(async () => {
            expect((screen.getByRole('checkbox') as HTMLInputElement).checked).toBeTruthy();
        })
    });

    /*
    tests to do:
    - test for not checking nativetimetype if either set to usecontz or not filled at all
    - pressing enter doesn't submit document
    - checking that e.preventdefault wasn't called?
    */
});