type Address = {
  street: string;
  cityStateZip: string;
};

type Location = {
  _key: string;
  name: string;
  address: Address | null;
};

type CombinedLocation = {
  _keys: string[]; // tracking merged keys
  name: string;
  address: Address | null;
};

export function combineLocationsByAddress(
  locations: Location[]
): CombinedLocation[] {
  const grouped: Record<string, CombinedLocation> = {};

  locations.forEach((loc) => {
    if (!loc.address) return; // skip null addresses

    const addrKey = `${loc.address.street}|${loc.address.cityStateZip}`;

    if (!grouped[addrKey]) {
      grouped[addrKey] = {
        _keys: [loc._key],
        name: loc.name,
        address: loc.address,
      };
    } else {
      grouped[addrKey]._keys.push(loc._key);
      grouped[addrKey].name = combineNames(grouped[addrKey].name, loc.name);
    }
  });

  // Include entries with null address (no combining possible)
  const withNulls = locations
    .filter((loc) => !loc.address)
    .map((loc) => ({
      _keys: [loc._key],
      name: loc.name,
      address: null,
    }));

  return [...Object.values(grouped), ...withNulls];
}

function combineNames(existing: string, next: string): string {
  const names = existing.split(/,\s*| & /).concat(next);
  if (names.length === 2) {
    return names.join(" & ");
  } else {
    return names.slice(0, -1).join(", ") + ", & " + names[names.length - 1];
  }
}
