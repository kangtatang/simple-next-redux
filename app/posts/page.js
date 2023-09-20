import PostComponent from "@/components/PostComponent";
export default function Posts() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3 className="mt-4">Posts</h3>
          <hr />
          <PostComponent />
        </div>
      </div>
    </div>
  );
}
