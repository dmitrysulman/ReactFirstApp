export function Post(props) {
    const {id, name, cb} = props;

    return <h2>{name} <button onClick={() => cb(id)}>delete</button></h2>
}