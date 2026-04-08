import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { CollapseRoot, CollapsePanel } from './Collapse';

function TestPanel({ itemKey }: { itemKey: string }) {
  return (
    <CollapsePanel itemKey={itemKey}>
      {({ isOpen, getButtonProps }) => (
        <div>
          <button {...getButtonProps()}>{itemKey} toggle</button>
          {isOpen && <div>{itemKey} content</div>}
        </div>
      )}
    </CollapsePanel>
  );
}

describe('CollapseRoot', () => {
  it('默认全部折叠', () => {
    render(
      <CollapseRoot>
        <TestPanel itemKey="a" />
      </CollapseRoot>
    );
    expect(screen.queryByText('a content')).toBeNull();
  });

  it('defaultActiveKeys 可以默认展开指定项', () => {
    render(
      <CollapseRoot defaultActiveKeys={['a']}>
        <TestPanel itemKey="a" />
        <TestPanel itemKey="b" />
      </CollapseRoot>
    );
    expect(screen.getByText('a content')).toBeTruthy();
    expect(screen.queryByText('b content')).toBeNull();
  });

  it('点击可展开 panel', async () => {
    const user = userEvent.setup();
    render(
      <CollapseRoot>
        <TestPanel itemKey="a" />
      </CollapseRoot>
    );
    await user.click(screen.getByText('a toggle'));
    expect(screen.getByText('a content')).toBeTruthy();
  });

  it('再次点击可折叠 panel', async () => {
    const user = userEvent.setup();
    render(
      <CollapseRoot>
        <TestPanel itemKey="a" />
      </CollapseRoot>
    );
    await user.click(screen.getByText('a toggle'));
    await user.click(screen.getByText('a toggle'));
    expect(screen.queryByText('a content')).toBeNull();
  });

  it('非手风琴模式可同时展开多个 panel', async () => {
    const user = userEvent.setup();
    render(
      <CollapseRoot>
        <TestPanel itemKey="a" />
        <TestPanel itemKey="b" />
      </CollapseRoot>
    );
    await user.click(screen.getByText('a toggle'));
    await user.click(screen.getByText('b toggle'));
    expect(screen.getByText('a content')).toBeTruthy();
    expect(screen.getByText('b content')).toBeTruthy();
  });

  it('手风琴模式下打开新项会关闭已展开项', async () => {
    const user = userEvent.setup();
    render(
      <CollapseRoot accordion>
        <TestPanel itemKey="a" />
        <TestPanel itemKey="b" />
      </CollapseRoot>
    );
    await user.click(screen.getByText('a toggle'));
    expect(screen.getByText('a content')).toBeTruthy();

    await user.click(screen.getByText('b toggle'));
    expect(screen.queryByText('a content')).toBeNull();
    expect(screen.getByText('b content')).toBeTruthy();
  });

  it('手风琴模式下点击已展开项会折叠', async () => {
    const user = userEvent.setup();
    render(
      <CollapseRoot accordion>
        <TestPanel itemKey="a" />
      </CollapseRoot>
    );
    await user.click(screen.getByText('a toggle'));
    await user.click(screen.getByText('a toggle'));
    expect(screen.queryByText('a content')).toBeNull();
  });
});

describe('CollapsePanel getButtonProps', () => {
  it('初始 aria-expanded 为 false', () => {
    render(
      <CollapseRoot>
        <TestPanel itemKey="x" />
      </CollapseRoot>
    );
    expect(screen.getByText('x toggle').getAttribute('aria-expanded')).toBe('false');
  });

  it('展开后 aria-expanded 为 true', async () => {
    const user = userEvent.setup();
    render(
      <CollapseRoot>
        <TestPanel itemKey="x" />
      </CollapseRoot>
    );
    await user.click(screen.getByText('x toggle'));
    expect(screen.getByText('x toggle').getAttribute('aria-expanded')).toBe('true');
  });
});
