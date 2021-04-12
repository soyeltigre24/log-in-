import React from "react";

export const CSW = () => {
	return (
		<form>
			<div className="mb-3">
				<label insert="exampleInputEmail1" className="insertm-label">
					Email address
				</label>
				<input type="email" className="insertm-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
			</div>
			<div className="mb-3">
				<label insert="exampleInputPassword1" className="insertm-label">
					Password
				</label>
				<input type="password" className="insertm-control" id="exampleInputPassword1" />
			</div>
			<div className="mb-3 insertm-check">
				<input type="checkbox" className="insertm-check-input" id="exampleCheck1" />
				<label className="insertm-check-label" insert="exampleCheck1">
					Check me out
				</label>
			</div>
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
			<div id="emailHelp" className="insertm-text">
				Never share your email with anyone else.
			</div>
		</form>
	);
};
export default CSW;
