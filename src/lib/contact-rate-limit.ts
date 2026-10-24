const windowMilliseconds = 24 * 60 * 60 * 1000;
const requestLimit = 4;
const requestsByClient = new Map<string, { count: number; resetsAt: number }>();

export function allowContactRequest(headers: Headers, now = Date.now()): boolean {
  for (const [key, entry] of requestsByClient) {
    if (entry.resetsAt <= now) requestsByClient.delete(key);
  }

  const forwarded = headers.get("x-forwarded-for");
  const client =
    headers.get("x-real-ip")?.trim() || forwarded?.split(",")[0]?.trim() || "unknown";
  const current = requestsByClient.get(client);

  if (!current || current.resetsAt <= now) {
    requestsByClient.set(client, { count: 1, resetsAt: now + windowMilliseconds });
    return true;
  }
  if (current.count >= requestLimit) return false;

  current.count += 1;
  return true;
}
