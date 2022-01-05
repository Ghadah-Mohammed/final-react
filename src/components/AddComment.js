function AddComment() {
    return (<>
    <section className="signupform pt-5">
          <Form onSubmit={login} style={{ height: "300px" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Add Comment</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" />
            </Form.Group>
            <button type="submit">Login!</button>
          </Form>
        </section>
    
    </>  );
}

export default AddComment;