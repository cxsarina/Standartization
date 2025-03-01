import BookingForm from "./BookingForm";

export default {
    title: "Forms/BookingForm",
    component: BookingForm,
};

const Template = (args) => <BookingForm {...args} />;

export const Empty = Template.bind({});
Empty.args = {};

export const Prefilled = Template.bind({});
Prefilled.args = {
    name: "cxsarina0",
    email: "cxsarina@gmail.com",
    date: "2025-03-10",
    time: "12:00",
};

export const WithErrors = Template.bind({});
WithErrors.args = {
    name: "",
    email: "",
    date: "",
    time: "",
};
