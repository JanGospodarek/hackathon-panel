"use client";
import { socket } from "@/socket";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Switch,
} from "@nextui-org/react";
import { ToggleLeft } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const Switches = () => {
  const [switches, setSwitches] = useState<{ switch: number; state: string }[]>(
    []
  );
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    socket.on("switchUpdate", (data) => {
      if (switches.length == 0) {
        setSwitches(data.switches);
      }
    });
  }, []);
  const handleSwitchChange = async (swNumber: number) => {
    setLoading(true);
    const cp = [...switches];

    cp[swNumber].state === "on"
      ? (cp[swNumber].state = "off")
      : (cp[swNumber].state = "on");

    setSwitches(cp);
    const res = await fetch("http://192.168.0.103:3030/esp/updateSwitch", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: cp[swNumber] }),
    });
    setLoading(false);
  };
  return (
    <Dropdown backdrop="blur" closeOnSelect={false}>
      <DropdownTrigger>
        <button className=" hover:scale-105 focus:border-none">
          <ToggleLeft size={32} color="#fff" />
        </button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Static Actions">
        <DropdownItem key="0">
          {switches.length > 0 && (
            <div>
              {" "}
              <Switch
                isSelected={switches[0].state == "on"}
                onChange={() => handleSwitchChange(0)}
              />
              Switch 1
            </div>
          )}
        </DropdownItem>
        <DropdownItem key="1">
          {switches.length > 0 && (
            <div>
              <Switch
                isSelected={switches[1].state == "on"}
                onChange={() => handleSwitchChange(1)}
              />
              Switch 2
            </div>
          )}
        </DropdownItem>
        <DropdownItem key="3">
          {switches.length > 0 && (
            <div>
              <Switch
                isSelected={switches[2].state == "on"}
                onChange={() => handleSwitchChange(2)}
              />{" "}
              Switch 3
            </div>
          )}
        </DropdownItem>
        <DropdownItem key="4">
          {switches.length > 0 && (
            <div>
              <Switch
                isSelected={switches[3].state == "on"}
                onChange={() => handleSwitchChange(3)}
              />{" "}
              Switch 4
            </div>
          )}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
export default Switches;
