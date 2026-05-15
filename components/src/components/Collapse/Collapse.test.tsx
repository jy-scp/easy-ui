import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import {
  CollapseRoot,
  CollapsePanel,
  CollapseTrigger,
  CollapseContent,
} from "./Collapse";

// ─────────────────────────────────────────────
// 测试用的辅助组件：标准的套路三写法
// ─────────────────────────────────────────────

function TestPanel({ itemKey }: { itemKey: string }) {
  return (
    <CollapsePanel itemKey={itemKey}>
      <CollapseTrigger>{itemKey} toggle</CollapseTrigger>
      <CollapseContent>{itemKey} content</CollapseContent>
    </CollapsePanel>
  );
}

// ─────────────────────────────────────────────
// CollapseRoot 行为测试
// ─────────────────────────────────────────────

describe("CollapseRoot", () => {
  it("默认全部折叠", () => {
    render(
      <CollapseRoot>
        <TestPanel itemKey="a" />
      </CollapseRoot>,
    );
    expect(screen.queryByText("a content")).toBeNull();
  });

  it("defaultActiveKeys 可以默认展开指定项", () => {
    render(
      <CollapseRoot defaultActiveKeys={["a"]}>
        <TestPanel itemKey="a" />
        <TestPanel itemKey="b" />
      </CollapseRoot>,
    );
    expect(screen.getByText("a content")).toBeTruthy();
    expect(screen.queryByText("b content")).toBeNull();
  });

  it("点击可展开 panel", async () => {
    const user = userEvent.setup();
    render(
      <CollapseRoot>
        <TestPanel itemKey="a" />
      </CollapseRoot>,
    );
    await user.click(screen.getByText("a toggle"));
    expect(screen.getByText("a content")).toBeTruthy();
  });

  it("再次点击可折叠 panel", async () => {
    const user = userEvent.setup();
    render(
      <CollapseRoot>
        <TestPanel itemKey="a" />
      </CollapseRoot>,
    );
    await user.click(screen.getByText("a toggle"));
    await user.click(screen.getByText("a toggle"));
    expect(screen.queryByText("a content")).toBeNull();
  });

  it("非手风琴模式可同时展开多个 panel", async () => {
    const user = userEvent.setup();
    render(
      <CollapseRoot>
        <TestPanel itemKey="a" />
        <TestPanel itemKey="b" />
      </CollapseRoot>,
    );
    await user.click(screen.getByText("a toggle"));
    await user.click(screen.getByText("b toggle"));
    expect(screen.getByText("a content")).toBeTruthy();
    expect(screen.getByText("b content")).toBeTruthy();
  });

  it("手风琴模式下打开新项会关闭已展开项", async () => {
    const user = userEvent.setup();
    render(
      <CollapseRoot accordion>
        <TestPanel itemKey="a" />
        <TestPanel itemKey="b" />
      </CollapseRoot>,
    );
    await user.click(screen.getByText("a toggle"));
    expect(screen.getByText("a content")).toBeTruthy();

    await user.click(screen.getByText("b toggle"));
    expect(screen.queryByText("a content")).toBeNull();
    expect(screen.getByText("b content")).toBeTruthy();
  });

  it("手风琴模式下点击已展开项会折叠", async () => {
    const user = userEvent.setup();
    render(
      <CollapseRoot accordion>
        <TestPanel itemKey="a" />
      </CollapseRoot>,
    );
    await user.click(screen.getByText("a toggle"));
    await user.click(screen.getByText("a toggle"));
    expect(screen.queryByText("a content")).toBeNull();
  });
});

// ─────────────────────────────────────────────
// ARIA 属性测试
// ─────────────────────────────────────────────

describe("CollapseTrigger ARIA", () => {
  it("初始 aria-expanded 为 false", () => {
    render(
      <CollapseRoot>
        <TestPanel itemKey="x" />
      </CollapseRoot>,
    );
    expect(screen.getByText("x toggle").getAttribute("aria-expanded")).toBe(
      "false",
    );
  });

  it("展开后 aria-expanded 为 true", async () => {
    const user = userEvent.setup();
    render(
      <CollapseRoot>
        <TestPanel itemKey="x" />
      </CollapseRoot>,
    );
    await user.click(screen.getByText("x toggle"));
    expect(screen.getByText("x toggle").getAttribute("aria-expanded")).toBe(
      "true",
    );
  });

  it("Trigger 的 aria-controls 指向 Content 的 id", () => {
    render(
      <CollapseRoot defaultActiveKeys={["x"]}>
        <TestPanel itemKey="x" />
      </CollapseRoot>,
    );
    const trigger = screen.getByText("x toggle");
    const content = screen.getByText("x content").closest('[role="region"]')!;
    expect(trigger.getAttribute("aria-controls")).toBe(
      content.getAttribute("id"),
    );
  });

  it("Content 的 aria-labelledby 指向 Trigger 的 id", () => {
    render(
      <CollapseRoot defaultActiveKeys={["x"]}>
        <TestPanel itemKey="x" />
      </CollapseRoot>,
    );
    const trigger = screen.getByText("x toggle");
    const content = screen.getByText("x content").closest('[role="region"]')!;
    expect(content.getAttribute("aria-labelledby")).toBe(
      trigger.getAttribute("id"),
    );
  });
});

// ─────────────────────────────────────────────
// 错误边界测试
// ─────────────────────────────────────────────

describe("错误边界", () => {
  it("CollapsePanel 在 CollapseRoot 外使用时抛出错误", () => {
    // 阻止 React 把错误打印到 console
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() =>
      render(
        <CollapsePanel itemKey="a">
          <CollapseTrigger>trigger</CollapseTrigger>
        </CollapsePanel>,
      ),
    ).toThrow("Collapse sub-components must be wrapped in <Collapse>");
    spy.mockRestore();
  });

  it("CollapseTrigger 在 CollapsePanel 外使用时抛出错误", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() =>
      render(
        <CollapseRoot>
          <CollapseTrigger>trigger</CollapseTrigger>
        </CollapseRoot>,
      ),
    ).toThrow(
      "Collapse.Trigger / Collapse.Content must be wrapped in <Collapse.Panel>",
    );
    spy.mockRestore();
  });
});
