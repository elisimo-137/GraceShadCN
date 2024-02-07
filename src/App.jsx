import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <div className="container">
      <Tabs defaultValue="sadje">
        <TabsList>
          <TabsTrigger value="sadje">Sadje</TabsTrigger>
          <TabsTrigger value="zivali">Živali</TabsTrigger>
        </TabsList>
        <TabsContent value="sadje">
          <div class="grid grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Slon</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  className="rounded-3xl"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/800px-African_Bush_Elephant.jpg"
                ></img>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Več o slonu</Button>
                <p>
                  Elephantidae je družina velikih rastlinojedih proboscidnih
                  sesalcev, ki jih skupaj imenujemo sloni in mamuti. To so
                  veliki kopenski sesalci z gobcem, spremenjenim v rilec in
                  zobmi, spremenjenimi v okle. Večina rodov in vrst v družini je
                  izumrla.
                </p>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="https://sl.wikipedia.org/wiki/Sloni#/media/Slika:African_Bush_Elephant.jpg"></img>
              </CardContent>
              <CardFooter>
                <Button className="w-full"></Button>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="zivali">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
