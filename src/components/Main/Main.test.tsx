import { render, screen } from '@testing-library/react';
import Main from '.';

describe('<Main />', () => {
  it('should render heading of the Main Component', () => {
    render(<Main />);

    expect(screen.getByRole('heading', { name: /main/i })).toBeInTheDocument();
  });

  it('should take a snapshot from Main component', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toMatchSnapshot();
  });
});