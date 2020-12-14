import React from "react";
import { renderWithTheme } from "../../testHelpers";
import { Button } from "../../components/Button";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Button>Submit</Button>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <button
        class="sc-bdfBwQ gwwGmF"
      >
        Submit
      </button>
    </DocumentFragment>
  `);
});
