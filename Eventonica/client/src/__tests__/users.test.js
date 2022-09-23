import {render, screen, cleanup} from "@testing-library/react";
import Users from "../components/Users"

afterEach(() => {
    cleanup();
})

//First test will check if User renders
describe("Users", () => {
    test("Users renders", ()=>{
render(<Users />)
    });
});

test("render Users header", ()=>{
    render(<Users />);
    expect(screen.getByText(/Add User/));  
});

// test("render Users form", ()=>{
//     render(<Users />);
//     expect(screen.) 
// });