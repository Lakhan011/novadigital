"use server";

export async function submitToGoogleSheets(data: any) {
  const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "https://script.google.com/macros/s/AKfycbw2Kh3v2MvOYSsVlDmLnlRdxpMDFXIS1exwQIpC5_9pNmaZHS4RzfEXV8KvR_XZYKaV/exec";

  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(data),
    });

    const text = await response.text();
    let result;
    try {
      result = JSON.parse(text);
    } catch (e) {
      // In case it returns HTML or something else
      console.log("Non-JSON response from Google:", text);
      return { success: true };
    }

    return { success: result.success !== false };
  } catch (error) {
    console.error("Server Action error:", error);
    return { success: false, error: String(error) };
  }
}
