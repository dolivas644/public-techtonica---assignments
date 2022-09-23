import {render, screen, cleanup} from "@testing-library/react";
import Footer from "../components/footer";

afterEach(() => {
    cleanup();
})

//First test will check if Footer renders
describe("Footer", () => {
    test("Footer renders", ()=>{
render(<Footer />)
    });
});