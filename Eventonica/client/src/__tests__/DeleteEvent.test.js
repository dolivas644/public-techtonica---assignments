import {render, screen, cleanup} from "@testing-library/react";
import DeleteEvent from "../components/DeleteEvent"

afterEach(() => {
    cleanup();
})

//First test will check if User renders
describe("DeleteEvent", () => {
    test("DeleteEvent renders", ()=>{
render(<DeleteEvent />)
    });
});

test("render DeleteEvent header", ()=>{
    render(<DeleteEvent />);
    expect(screen.getByText(/Delete Event/));  
});