import Modal from "./Modal";

export default {
    title: "UI/Modal",
    component: Modal,
    argTypes: {
        title: { control: "text" },
        content: { control: "text" },
    },
};

const Template = (args) => <Modal {...args} onClose={() => alert("Modal закрито")} />;

export const Default = Template.bind({});
Default.args = {
    title: "Приклад модального вікна",
    content: "Це тестове модальне вікно",
};
