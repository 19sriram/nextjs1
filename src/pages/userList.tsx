export const ListComponent = (props:any)=>{
    const {users} = props;
    console.log('ListComponent users:', users);
    return (
        <>
        { users?.map((u: any) => (
          <li key={u.id}>
            {u.name}
          </li>
        ))}
        </>
    )
}