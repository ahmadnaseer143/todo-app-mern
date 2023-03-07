import { render, screen } from "@testing-library/react";
import Options from "../TaskContainer/Options";

test("test should render options component", () => {
  // check whether Options component is rendering
  render(<Options />);
  // now check whether Options componenet is in Dom or not
  const optionsElement = screen.getByTestId("options-container-test");
  expect(optionsElement).toBeInTheDocument();
});

test("test should render our options", () => {
  // the props i am passing whether those are getting rendered or not
  const task = {
    task: "Explore the world",
    _id: "6405df93e66a4dddbd0c561a",
    completed: false,
    completedTime: null,
    creationTime: "2023-03-06T12:41:55.387Z",
  };
  render(<Options removeTask={() => {}} task={task} />);
  const optionsElement = screen.getByTestId("options-container-test");
  // check whether task is showing on screen or not
  expect(task.task).toBe("Explore the world");
});
