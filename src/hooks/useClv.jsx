import { clvDevice } from "telesale";
import { useRef, useEffect, useState } from "react";

export function useClv() {
  const [rejectStt, setRejectStt] = useState();
  const deviceclv = useRef(null);
  const [userCalling, setUserCalling] = useState(null);

  let config = {
    host: "cf-pbx0001442.cfvn.cloud",
    port: "4433",
    displayName: `106`,
    username: `106`,
    password: `Zaq@1234`,
    wsServers: "wss://rtc.cloudfone.vn:4433",
  };

  useEffect(() => {
    const device = new clvDevice(config);
    device.on("connecting", () => {
      console.log("connecting!");
    });
    device.on("accepted", (data) => {
      status.current = data?.status;
    });
    device.on("invite", (data) => {
      setUserCalling(data);
    });
    device.on("accept", (accept) => {
      console.log("accept", accept);
    });
    device.on("cancel", (cancel) => {
      console.log("cancel", cancel);
    });
    device.on("rejected", (rejected) => {
      if (rejected.statusCode === 486) {
        setRejectStt(11);
        console.log("khach tu tat may khi chua cam may");
      } else if (rejected.statusCode === 487) {
        setRejectStt(12);
        console.log("user chu dong tat");
      } else if (rejected.statusCode === 500) {
        setRejectStt(13);
        console.log("ko tra loi");
      }
    });
    device.on("destroyed", (data) => {
      console.log("destroyed", data);
    });
    device.on("failed", (failed) => {
      console.log("failed13131133", failed);
    });
    device.on("bye", (bye) => {
      console.log("bye");
    });
    device?.on("replaced", (replaced) => {
      console.log("replaced", replaced);
    });

    device?.on("terminated", (response, cause) => {
      console.log("terminated", response, cause);
    });
    device?.on("trackAdded", (trackAdded) => {
      console.log("trackAdded", trackAdded);
    });
    device?.on("refer", (response, newSession) => {
      console.log("refer", response, newSession);
    });

    deviceclv.current = device;
  }, [rejectStt]);

  return [deviceclv, rejectStt, userCalling, setUserCalling];
}
