import { describe, expect, test, vi } from "vitest";
import MenuPage from "../../MenuPage";
import { settingsPage } from "../../menupages/Settings";
import { createEvent, fireEvent, getByText, render, waitFor } from "@testing-library/react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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
            expect(screen.getAllByRole('button').length).greaterThan(1);
        });
    });

    test("con tz does not trigger regular form submit onclick", async () => {
        const setItemTest = vi.spyOn(Storage.prototype, "setItem").mockReturnValue();
        let element:JSX.Element = <>
            <MenuPage show_var={() => {return true}} hide_fxn={vi.fn()} idx={0}>
                <MenuPage.Header >{settingsPage["header"]}</MenuPage.Header>
                <MenuPage.Body fluidImage={settingsPage["fluidImage"]} mainText={settingsPage["body"]}></MenuPage.Body>
            </MenuPage>
        </>;
        render(element);
        await userEvent.click(screen.getByText("Display Event Times in Device Time"));
        
        const myEvent = createEvent.click(screen.getAllByRole('button')[1]);
        fireEvent(screen.getAllByRole('button')[1], myEvent)

        await waitFor(async () => {
            expect(myEvent.defaultPrevented).toBeTruthy();
            expect(setItemTest).toHaveBeenCalled();
        });
    });
});