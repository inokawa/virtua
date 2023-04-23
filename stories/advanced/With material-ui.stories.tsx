import { Meta, StoryObj } from "@storybook/react";
import { VList } from "../../src";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

export default {
  component: VList,
} as Meta;

export const Default: StoryObj = {
  name: "With material-ui",
  render: () => {
    const [checked, setChecked] = useState<Record<number, boolean>>({});
    return (
      <Box
        sx={{
          width: "100%",
          height: 500,
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <VList style={{ width: "100%", height: "100%" }}>
          {Array.from({ length: 1000 }, (_, i) => {
            const labelId = `checkbox-list-label-${i}`;
            return (
              <ListItem key={i} component="div" disablePadding>
                <ListItemButton
                  dense
                  onClick={() =>
                    setChecked((prev) => ({
                      ...prev,
                      [i]: !prev[i],
                    }))
                  }
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={!!checked[i]}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={`Item ${i + 1}`} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </VList>
      </Box>
    );
  },
};
