import { View, PropTypes } from "react-view";
import Component from "./component";
import { Button } from "@beamery/lib-ds-components";

export default () => (
  <View
    initialCode={`() => {
  return <Tooltip value="test">{(props) => <Button {...props}>button with tooltip</Button>}</Tooltip>;
}
`}
    componentName="Tooltip"
    props={{
      value: {
        value: "Hello",
        type: PropTypes.String,
      },
      defaultOpen: {
        value: false,
        type: PropTypes.Boolean,
        description: "Whether the overlay is open by default (uncontrolled).",
      },
      isOpen: {
        type: PropTypes.Boolean,
        description: "Whether the overlay is open by default (controlled).",
        hidden: true,
      },
      onOpenChange: {
        type: PropTypes.Function,
        description: "Handler that is called when the overlay's open state changes.",
      },
      position: {
        defaultValue: "left",
        type: PropTypes.Enum,
        options: {
          left: "left",
          top: "top",
          right: "right",
          bottom: "bottom",
        },
      },
      trigger: {
        type: PropTypes.String,
        description: "By default, opens for both focus and hover. Can be made to open only for focus.",
      },
    }}
    scope={{
      Tooltip: Component,
      Button: Button,
    }}
    imports={{
      "@beamery/lib-ds-components": {
        named: ["Tooltip"],
      },
    }}
  />
);
