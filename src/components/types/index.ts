interface HistoryRow {
  title: string;
  comment: string;
  time: string;
  type: "normal" | "alarm";
}
interface Sensor {
  data: number;
  status: "off" | "on";
}
interface Sensors {
  movement: Sensor;
  clicker: Sensor;
  temperature: Sensor;
  light: Sensor;
}
interface AppState {
  sensors: Sensors;
  switches: {
    light: boolean;
    water: boolean;
  };
  history: HistoryRow[];
}

export type { AppState, HistoryRow, Sensors, Sensor };
