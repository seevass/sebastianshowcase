import { Text } from "@mantine/core";
import { IconPower, IconRefresh } from "@tabler/icons-react";
import { images } from "../helpers/images";
import "./StartMenu.css";

function StartMenu() {
  return (
    <div className="start-menu">
      <div className="start-menu-header">
        <img className="start-menu-avatar" src={images.profilePic} alt="" />
        <Text className="start-menu-name" fz="lg">
          Sebastian Cruz
        </Text>
      </div>

      <div className="start-menu-body">
        <div className="start-menu-left">{/* programs go here */}</div>
        <div className="start-menu-right">
          {/* places and settings go here */}
        </div>
      </div>

      <div className="start-menu-footer">
        <button type="button" className="start-menu-action">
          <IconRefresh
            size={16}
            className="start-menu-restart start-menu-icon"
          />
          <Text>Restart</Text>
        </button>
        <button type="button" className="start-menu-action">
          <IconPower
            size={16}
            className="start-menu-shutdown start-menu-icon"
          />
          <Text>Shut down</Text>
        </button>
      </div>
    </div>
  );
}

export default StartMenu;
