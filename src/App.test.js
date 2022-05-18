import { createEvent, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App, { TodoItems } from "./App";

describe("APP function TODOITEMS", () => {
  test("ejecuta complete", async () => {
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
    const completeBtn = screen.getAllByText("Complete 0")[1];
    const removeBtn = screen.getAllByText("Delete")[0];

    await userEvent.click(completeBtn);
    await userEvent.click(removeBtn);

    expect(removeTodo.mock.calls).toEqual([]);
  });
});
