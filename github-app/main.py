from fastapi import FastAPI

app = FastAPI()

@app.post("/review")
async def review(payload: dict):
    files = payload.get("files", [])

    return {
        "status": "success",
        "issues": [],
        "recommendations": [
            "Add tests",
            "Improve validation",
            "Update documentation"
        ]
    }
