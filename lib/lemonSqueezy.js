import { v4 as uuidv4 } from "uuid";

const LemonSqueezy = {
  validateLicenseKey: async (licenseKey) => {
    const apiUrl = "https://api.lemonsqueezy.com/v1/licenses/validate";
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `license_key=${licenseKey}`,
      });
      const data = await response.json();

      if (data.valid) {
        const storeId = "YOUR_STORE_ID"; //replace with your store id
        if (
          data.meta.store_id == storeId &&
          data.license_key.activation_usage == 1
        ) {
          return { isValid: true };
        } else {
          return { isValid: false };
        }
      } else {
        return { isValid: false };
      }
    } catch (error) {
      return { isValid: false };
    }
  },

  activeLicenseKey: async (licenseKey) => {
    const apiUrl = "https://api.lemonsqueezy.com/v1/licenses/activate";
    try {
      const body = new URLSearchParams({
        license_key: licenseKey,
        instance_name: uuidv4(),
      });
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: body,
      });
      const data = await response.json();

      if (data.activated) {
        return { isActivated: true };
      } else {
        return { isActivated: false, error: data.error };
      }
    } catch (error) {
      return { isActivated: false };
    }
  },
};

export default LemonSqueezy;
