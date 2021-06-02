/**
 * @jest-environment jsdom
 */
import React from 'react';

import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';

import YearCard from '../components/year-card';
import Main from '../pages/index';


const expectedYear = new Date().getFullYear();

describe('Dashboard Unit Tests', () => {

  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    cleanup();
  });

  it('A year displays properly', () => {
    const data = {
      year: expectedYear
    };
    render(<YearCard data={data} index={0} onClick={undefined} />);
    const heading = screen.getByText(data.year + '-' + (data.year + 1));
    expect(heading).toBeInTheDocument();
  });
  it('New page starts with 1 entry', () => {
    render(<Main />);
    const years = screen.queryAllByText(`${expectedYear}-${expectedYear+1}`);
    expect(years.length).toBe(1);
  });
  it('Clicking on New Year adds a new YearCard', async () => {
    render(<Main />);
    const yrLenBefore = screen.queryAllByText(`${expectedYear}-${expectedYear+1}`).length;
    fireEvent.click(screen.getByText('Add Year'));
    const yrLenAfter = await waitFor(() => screen.getAllByText(`${expectedYear}-${expectedYear+1}`));
    expect(yrLenAfter.length).toBe(yrLenBefore + 1);
  });
  it('Clicking settings button creates dropdown', async () => {
    render(<Main />);
    fireEvent.click(screen.getByText('Settings'));
    const dropdown = await waitFor(() => screen.getByTestId('dropdown'));
    expect(dropdown).toBeVisible();
  });
  it('Clicking on a year changes state', async () => {
    render(<Main />);
    fireEvent.click(screen.getByText(`${expectedYear}-${expectedYear+1}`));
    expect(screen.getByText('Create New Entry')).toBeInTheDocument();
  });
});

