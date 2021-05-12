import React from "react";

import Profile from "./Profile";

export default {
  title: "Example/Profile",
  component: Profile,
};

const Template = (args) => <Profile {...args} />;

export const StandardProfile = Template.bind({});
StandardProfile.args = {
  user: {},
};
