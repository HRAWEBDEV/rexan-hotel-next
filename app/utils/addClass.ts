const addClassName = (bassedOn: any, className?: string) => {
 return bassedOn ? ` ${className}` : '';
};

export default addClassName;
