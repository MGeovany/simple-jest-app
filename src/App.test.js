import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App, { TodoItems } from "./App";

describe("Functions of the TODO APP", () => {
  test("1 Confirm Add button is dissabled", async () => {
    render(<App />);
    const completeTodo = jest.fn();
    const removeTodo = jest.fn();

    const index = 5;
    const task = [
      {
        task: "Luna dame bread",
        isCompleted: true,
      },
    ];

    render(
      <TodoItems
        task={task}
        index={index}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    );
    /*const completeBtn = screen.getByRole("button", { name: /completebtn_0/i });
    const removeBtn = screen.getByRole("button", { name: /deletebtn_0/i });

    userEvent.click(completeBtn);
    await userEvent.click(removeBtn);
    */
    expect(
      screen.getByRole("button", {
        name: /add/i,
      })
    ).toBeDisabled();
  });

  test('2.Confirm delete button is removing', ()=> {

      const delBtn = screen.getByRole('button', {  name: /deletebtn_0_create the todo app/i})
      
      userEvent.click(delBtn)
  })
  
});
