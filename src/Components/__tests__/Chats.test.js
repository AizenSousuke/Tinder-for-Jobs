import { cleanup, shallow, render } from "@testing-library/react"
import Chats from "../Chats"

test('should render Chats', () => {
    render(<Chats data-testid="chats" />);
    const chats = shallow(<Chats />);
    expect(chats.contains(<div></div>)).toEqual(true);
    cleanup();
})