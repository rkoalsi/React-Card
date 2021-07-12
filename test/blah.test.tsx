import * as React from 'react';
import StyledCard from '../src';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const App = () => {
  return (
    <StyledCard
      height={500}
      width={500}
      bgPhoto="https://picsum.photos/seed/picsum/200/300"
      title={'View'}
    />
  );
};

describe('it', () => {
  it('renders without crashing', async () => {
    const { getByText } = render(<App />);
    const yesNode = await waitFor(() => getByText('View'));
    expect(yesNode).toBeInTheDocument();
  });
});
