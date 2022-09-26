import {render, screen, cleanup} from "@testing-library/react";
import Events from "../components/Events"

afterEach(() => {
    cleanup();
})

//First test will check if User renders
describe("Users", () => {
    test("Users renders", ()=>{
render(<Events />)
    });
});

test("render Events header", ()=>{
    render(<Events />);
    expect(screen.getByText(/Add Event/));  
});