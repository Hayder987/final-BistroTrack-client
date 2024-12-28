

const SectionTitle = ({subTitle, title}) => {
    return (
        <div className="w-10/12 md:w-4/12 mx-auto py-6 mb-6">
            <p className="text-xl text-orange-400 text-center mb-4">---{subTitle}---</p>
            <h3 className="text-4xl border-y-4 text-center py-4">{title}</h3>    
        </div>
    );
};

export default SectionTitle;