import { Button, Tooltip, DesignSystemProvider } from "@beamery/lib-ds-components";
import { theme } from "@beamery/lib-ds-theme";

export default (props) => {
  return (
    <DesignSystemProvider theme={theme}>
      <Tooltip {...props}>{(tooltipProps) => <Button {...tooltipProps}>Button with tooltip</Button>}</Tooltip>
    </DesignSystemProvider>
  );
};
