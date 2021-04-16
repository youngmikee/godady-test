import { render } from "@testing-library/react"
import Tab from "./Tap"

test('Should have text Mobile tab', () => {
    const { getByText } = render(<Tab />);
    const h1 = getByText(/Mobile Tab/);
    expect(h1).toHaveTextContent('Mobile Tab');
});