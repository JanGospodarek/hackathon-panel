"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Switch,
} from "@nextui-org/react";
import { Monitor } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const Views = () => {
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));

  useEffect(() => {
    const selected = Array.from(selectedKeys)[0];
    (async () => {
      const res = await fetch("http://192.168.0.103:3030/esp/setView", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ screen: selected }),
      });
    })();
  }, [selectedKeys]);

  return (
    <Dropdown backdrop="blur" closeOnSelect={false}>
      <DropdownTrigger>
        <button className=" hover:scale-105 focus:border-none">
          <Monitor size={32} color="#fff" />
        </button>
      </DropdownTrigger>
      <DropdownMenu
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <DropdownItem key="logo">Logo</DropdownItem>
        <DropdownItem key="gestures">Gesty</DropdownItem>
        <DropdownItem key="home">Główna</DropdownItem>
        <DropdownItem key="sleep">Wygaszacz</DropdownItem>
        <DropdownItem key="animation">Animacja</DropdownItem>
        <DropdownItem key="photo">Zdjęcie</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
export default Views;
