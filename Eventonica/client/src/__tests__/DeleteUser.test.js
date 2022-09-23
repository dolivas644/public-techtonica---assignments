import {render, screen, cleanup} from "@testing-library/react";
import DeleteUser from "../components/DeleteUser"

afterEach(() => {
    cleanup();
})

//First test will check if User renders
describe("DeleteUser", () => {
    test("DeleteUser renders", ()=>{
render(<DeleteUser />)
    });
});

test("render DeleteUser header", ()=>{
    render(<DeleteUser />);
    expect(screen.getByText(/Delete User/));  
});