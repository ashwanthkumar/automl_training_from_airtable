import {
  useGlobalConfig,
} from '@airtable/blocks/ui';
export const GCLOUD_SVC_EMAIL = "gcloudServiceEmail";
export const GCLOUD_SVC_PRIVATE_KEY = "gcloudServicePrivateKey";
export const GCLOUD_AUTOML_ENDPOINT = "gcloudAutomlProxy";
export const GCLOUD_GS_ENDPOINT = "gcloudGsProxy";
export const GCLOUD_CRM_ENDPOINT = "gcloudCrmProxy";

export const DEFAULT_AUTOML_ENDPOINT = 'https://automl2.ashwanthkumar.in';
export const DEFAULT_GS_ENDPOINT = 'https://gs.ashwanthkumar.in';
export const DEFAULT_CRM_ENDPOINT = 'https://cloudresourcemanager.ashwanthkumar.in';

const isEmpty = (input: string) => (!input || input === "")

export function useSettings() {
  const globalConfig = useGlobalConfig();

  const svcEmail = globalConfig.get(GCLOUD_SVC_EMAIL) as string;
  const svcKey = globalConfig.get(GCLOUD_SVC_PRIVATE_KEY) as string;
  const automlEndpoint = globalConfig.get(GCLOUD_AUTOML_ENDPOINT) as string;
  const gsEndpoint = globalConfig.get(GCLOUD_GS_ENDPOINT) as string;
  const crmEndpoint = globalConfig.get(GCLOUD_CRM_ENDPOINT) as string;

  const settings = {
    svcEmail,
    svcKey,
    automlEndpoint,
    gsEndpoint,
    crmEndpoint,
  };

  if (isEmpty(svcEmail) || isEmpty(svcKey) || isEmpty(automlEndpoint) || isEmpty(gsEndpoint) || isEmpty(crmEndpoint)) {
    return {
      isValid: false,
      message: 'Settings are invalid, please configure them once again',
      settings,
    };
  }
  return {
    isValid: true,
    settings,
  };
}
