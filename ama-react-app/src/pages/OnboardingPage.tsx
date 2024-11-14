import { TutimWizard, defaultFields, useWizardCurrentForm } from "@tutim/fields";
import { FormProvider, getUseFormInit, useForm } from "@tutim/headless";
import { InputType, Field, FieldComponents } from "@tutim/types";
import { useEffect, useState } from "react";

const API_BASE = 'http://localhost:5000'; // FIXME: rm hardcoding

const config = {
  meta: {
    title: "Setup User & Preferences",
    description: "Basic",
  },
  fields: [
    {
      key: "company_name",
      label: "Company name",
      type: "text",
      isRequired: true,
      placeholder: "Enter your company name",
    },
    {
      key: "db_uri",
      label: "Database Connection URI",
      type: "text",
      isRequired: true,
      tooltip: "Details for DB u will connect to",
      placeholder:
        "postgresql+psycopg2://<UserName>:<DBPassword>@<Database Host>/<Database Name>",
    },
    {
      key: "llm_type",
      type: "select",
      label: "LLM Type",
      isRequired: true,
      tooltip: "Details for LLM u got",
      defaultValue: "openai",
      options: [
        { label: "openai", value: "openai" },
        { label: "gemini", value: "gemini" },
        { label: "mistral", value: "mistral" },
      ],
    },
    {
      key: "llm_key",
      type: "password",
      label: "LLM KEY",
      isRequired: true,
      tooltip: "Details for LLM key, if u got one",
    },
    {
      key: "vanna_model",
      type: "text",
      label: "Vanna Model",
      isRequired: true,
      tooltip:
        "Details for Vanna.ai model, if not create one at https://Vanna.ai",
    },
    {
      key: "vanna_api_key",
      type: "password",
      label: "Vanna Model",
      isRequired: true,
      tooltip:
        "Details for Vanna.ai API Key, if not get one at https://Vanna.ai",
    },
    {
      key: "num_of_members",
      label: "Number of team members",
      type: "select",
      tooltip: "Details for other team members",
      options: [
        // {value:'-1', label:'Unknown'}, // uncomment and refresh the preview!
        { value: "1_5", label: "1 - 5" },
        { value: "5_25", label: "5 - 25" },
        { value: "above_25", label: "25 +" },
      ],
    },
    // { key: "target_site_id", label: "target_site_id", type: "text" },
    {
      key: "default_roles",
      label: "Default Roles",
      type: InputType.MultiText,
      isDisabled: true,
      defaultValue: ["admin-role", "salesreader", "spendreader"],
      placeholder: "admin-role",
    },
    {
      key: "roles",
      label: "Roles",
      type: "array",
      children: {
        fields: [
          {
            key: "role_name",
            label: "New role name",
            type: "text",
            placeholder: "New role name",
          },
          {
            key: "tables",
            label: "Tables",
            type: "array",
            // defaultValue: [{'table_name': 'all','default_rls': '1=1','default_rls': '1=1'}]
            children: {
              fields: [
                {
                  key: "table_name",
                  label: "table",
                  type: InputType.MultiText,
                  defaultValue: ["netflix"],
                },
                {
                  key: "rls",
                  label: "additional where",
                  type: InputType.MultiText,
                  defaultValue: ["1=1"],
                },
              ],
            },
          },
        ],
      },
    },
    {
      key: "members",
      label: "Team members",
      type: "array",
      children: {
        fields: [
          { key: "name", label: "Full Name", type: "text" },
          {
            key: "email",
            type: "text",
            label: "Email",
            isRequired: true,
            placeholder: "Enter your email",
            validations: {
              pattern: {
                value: "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$",
                message: "Must be a valid email",
              },
            },
          },
          {
            key: "role",
            label: "Role",
            type: InputType.MultiText,
            tooltip: "Role",
            defaultValue: ["admin-role"],
          },
          {
            key: "auth_key",
            type: "password",
            label: "Auth Key",
            isRequired: true,
            tooltip: "Details for Autth key, u need it for embedded usage",
          },
          { key: "target_site_id", label: "target_site_id", type: "text" },
        ],
      },
    },
    {
      key: "user_type",
      type: "select",
      label: "User Type",
      isRequired: true,
      defaultValue: "user",
      options: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
        { label: "OrgAdmin", value: "orguser" },
        { label: "OrgUser", value: "orguser" },
      ],
    },

    // {
    //   key: "widget_text_color",
    //   type: InputType.CustomColor,
    //   label: "Text Color",
    //   isRequired: true,
    //   tooltip: "Choose the color for text in widgets",
    // },
    // {
    //   key: "widget_bg_color",
    //   type: InputType.CustomColor,
    //   label: "Background Color Color",
    //   isRequired: true,
    //   tooltip: "Choose the color for text in widgets",
    // },
    {
      key: "widget_text_size_1",
      type: "select",
      label: "Heading text size",
      isRequired: true,
      tooltip: "Choose the heading font for text in widgets",
      defaultValue: "12",
      options: [
        { value: "10", label: "10" },
        { value: "12", label: "12" },
        { value: "14", label: "14" },
        { value: "16", label: "16" },
        { value: "18", label: "18" },
        { value: "20", label: "20" },
      ],
    },
    {
      key: "widget_text_size_2",
      type: "select",
      label: "Body text size",
      isRequired: true,
      tooltip: "Choose the body font for text in widgets",
      defaultValue: "10",
      options: [
        { value: "10", label: "10" },
        { value: "12", label: "12" },
        { value: "14", label: "14" },
        { value: "16", label: "16" },
        { value: "18", label: "18" },
        { value: "20", label: "20" },
      ],
    },
    {
      key: "widget_text_snippet",
      type: "text-area",
      label: "Widget snippet to copy",
      isRequired: true,
      tooltip: "Widget snippet to copy",
      defaultValue: "",
    },

    {
      key: "terms_and_conditions",
      type: "checkbox",
      label: "I agree to the Terms and Conditions",
      isRequired: false,// FIXME: DEMO: make it required
      defaultValue: true,
    },
  ],

  wizard: {
    steps: [
      {
        label: "Basic",
        fields: [
          "company_name",
          "llm_type",
          "llm_key",
          "vanna_model",
          "vanna_api_key",
          "db_uri",
          "num_of_members",
          "config",
        ],
      },
      { label: "Role Setup", fields: ["default_roles", "roles"] },
      { label: "Team info", fields: ["members"] },
      {
        label: "Widget",
        fields: [
          "widget_text_color",
          "widget_bg_color",
          "widget_text_size_1",
          "widget_text_size_2",
          // "auth_key",
          // "target_site_id"
        ],
      },
      { label: "Confirmation", fields: ["terms_and_conditions","widget_text_snippet",] },
    ],
  },
};

const CustomText: Field = ({ inputProps, fieldConfig }) => {
  const { value = "", onChange } = inputProps;
  // various hooks available: isDisabled, isRequired, options, defaultValue, validations
  const { key, label } = fieldConfig;
  return (
    <div key={key}>
      <input value={value} onChange={onChange} style={{ color: "purple" }} />
    </div>
  );
};

const CustomColor: Field = ({ inputProps, fieldConfig }) => {
  const { value = "", onChange } = inputProps;
  // various hooks available: isDisabled, isRequired, options, defaultValue, validations
  const { key, label } = fieldConfig;
  return (
    <div key={key}>
      <label
        style={{ marginRight: "10px" }}
        className="MuiFormControl-root css-q8hpuo-MuiFormControl-root"
      >
        {label}
      </label>
      <br />
      <input
        value={value}
        type="color"
        onChange={onChange}
        style={{ color: "purple" }}
      />
    </div>
  );
};

const fieldComponents: FieldComponents = {
  ...defaultFields,
  // [InputType.CustomColor]: CustomColor,
  // [InputType.Text]: CustomText, // uncomment this line to use custom components!
};


// this shall be only seen to the orgadmin role user upon signing in
export const OnboardingPage = () => {
  const [isInited, setInited] = useState(false)
  // const [prevData, setPrevData] = useForm(config)
  // @ts-ignore-line
  const [prevData, setPrevData] = useState(window?.prevValues || {})
  useEffect(() => {
    // fetch the current settings/preferences saveed for the logged in user 
    // or
    // fetch default settings values, if 1st time
    let _prevValues = {}
    // if (window?.prevValues) {
    //   _prevValues = window['prevValues'];
    // }
    if (_prevValues) {
      // setPrevData(_prevValues);
      setInited(true)
    } else {
      // fetch("https://run.mocky.io/v3/073e2d9e-c11b-4450-8fd6-83796877665c")
      // fetch("https://run.mocky.io/v3/0883d01d-ffa1-49a1-a75d-c9a099037e85")
      //   .then((res) => res.json())
      //   .then((res) => {
      //     console.log("res ", res);
      //     // setFormData(res || {});
      //     setPrevData(res);
      //     setInited(true)
      //   });
    }
  }, []);

  // @ts-ignore-line
  console.log(' >>>>',window?.prevValues)
  return (
    <FormProvider fieldComponents={fieldComponents}>
      {isInited ? <TutimWizard onSubmit={(e) => {
         console.log('config ', config)
         console.log('this  ', this)
         console.log('e ', e)
         const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(e.data)
        };
        
        fetch(API_BASE + '/vanna/aa', options)
          .then(response => response.text())
          .then((response) => {
            console.log(response)
            setTimeout(() => {
              document.location.reload();
            },100)
          })
          .catch(err => console.error(err));
        // submit the form
        // 'https://localhost:5000/xi'

        // @ts-ignore-line
      }} config={config} initialValues={window?.prevValues || prevData} /> : null}
    </FormProvider>
  );
};
export default OnboardingPage;
