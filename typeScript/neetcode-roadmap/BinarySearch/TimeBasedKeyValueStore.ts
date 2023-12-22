type TimeStamp = {
  timestamp: number;
  value: string;
};

class TimeMap {
  public hash: Map<string, TimeStamp[]>;

  constructor() {
    this.hash = new Map();
  }

  set(key: string, value: string, timestamp: number): void {
    if (this.hash.has(key)) {
      let arr = this.hash.get(key) as TimeStamp[];
      arr.push({ timestamp, value });
    } else {
      this.hash.set(key, [{ timestamp, value }]);
    }
  }

  get(key: string, timestamp: number): string {
    if (!this.hash.has(key)) return "";
    let timestamps = this.hash.get(key) as TimeStamp[];
    if (timestamps.length === 0 || timestamps[0].timestamp > timestamp)
      return "";

    let closest = timestamps[0];

    let [l, r] = [0, timestamps.length - 1];

    while (l <= r) {
      let mid = Math.floor((l + r) / 2);

      if (timestamps[mid].timestamp === timestamp) return timestamps[mid].value;
      if (timestamps[mid].timestamp < timestamp) closest = timestamps[mid];

      if (timestamps[mid].timestamp < timestamp) l = mid + 1;
      if (timestamps[mid].timestamp > timestamp) r = mid - 1;
    }

    return closest.value;
  }
}
