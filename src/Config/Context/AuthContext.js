import React from "react";

const RootContext = React.createContext();
const Provider = RootContext.Provider;

export const GlobalProvider = (Children) => {
	return (
		function ParentComp(props) {
			// state = {
			// 	isLogged: false,
			// 	dataUser: undefined,
			// 	nama: undefined,
			// 	nim: undefined,
			// 	prodi: undefined,
			// 	link: undefined,
			// 	token: undefined,
			// 	registered: false,
			// 	status: undefined,
			// 	loading: true,
			// 	kondisi: "",
			// };

			const [isLogged, setIsLogged] = React.useState(false);
			const [dataUser, setDataUser] = React.useState(undefined);
			const [nama, setNama] = React.useState(undefined);
			const [nim, setNim] = React.useState(undefined);
			const [prodi, setProdi] = React.useState(undefined);
			const [link, setLink] = React.useState(undefined);
			const [registered, setRegistered] = React.useState(false);
			const [status, setStatus] = React.useState(undefined);
			const [loading, setLoading] = React.useState(true);
			const [kondisi, setKondisi] = React.useState(false);

			function logout() {
				// this.setState({ isLogged: false });
				// this.setState({ dataUser: undefined });
				// this.setState({ nim: undefined });
				// this.setState({ prodi: undefined });
				// this.setState({ link: undefined });
				setIsLogged(false);
				setDataUser(undefined);
				setNim(undefined);
				setNama(undefined);
				setProdi(undefined);
				setLink(undefined);
				// this.setState({ token: undefined });
			}

			const login = async (nim, pass) => {
				const body = {
					nim: nim,
					password: pass
				};
				try {
					const res = await fetch("https://cors-anywhere.herokuapp.com/https://bemfilkom.ub.ac.id/secure/api/auth/", {
						method: "POST",
						headers: {
							"content-type": "application/json"
						},
						body: JSON.stringify(body)
					});
					const result = res;
					const data = await res.json();
					console.log(data);
					if (!result.ok) {
						return false;
					} else {
						// this.setState({ isLogged: true });
						// this.setState({ nim: data.data.nim });
						// this.setState({ nama: data.data.nama });
						// this.setState({ prodi: data.data.prodi });
						setIsLogged(true);
						setNama(data.data.nama);
						setNim(data.data.nim);
						setProdi(data.data.prodi);
						// this.setState({ token: data.token });
						// console.log(this.state)
						// return { "status": true, "token": data.token };
						return { "status": true };
					}

				} catch (error) {
					console.log("Konsol error : ", error);
				}
			};

			return (
				<Provider
					value={{
						isLogged: isLogged,
						dataUser: dataUser,
						nama: nama,
						nim: nim,
						prodi: prodi,
						login: login,
						link: link,
						logout: logout,
						// token: token,
						status: status,
						setStatus: setStatus,
						setLoading: setLoading,
						kondisi: kondisi,
						setKondisi: setKondisi
					}}
				>
					<Children {...props} />
				</Provider>
			);
		}
	);
}

//Consumer
const Consumer = RootContext.Consumer;

export const GlobalConsumer = (Children1) => {
	return (
		class ParentConsumer extends React.Component {
			render() {
				return (
					<Consumer>
						{
							value => {
								return (
									<Children1 {...this.props} {...value} />
								)
							}
						}
					</Consumer>
				)
			}
		}
	);
}

export const GlobalConsumer1 = (Children) => {
	return (
		function ParentConsumer(props) {
			return (
				<Consumer>
					{
						value => {
							return (
								<Children {...props} {...value} />
							)
						}
					}
				</Consumer>
			)
		}
	);
}