USE InterviewDB;
GO

IF OBJECT_ID('dbo.Users', 'U') IS NOT NULL 
  DROP TABLE dbo.Users;
GO

CREATE TABLE dbo.Users (
    id INT PRIMARY KEY IDENTITY(1,1),
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at DATETIME DEFAULT GETDATE()
);
GO